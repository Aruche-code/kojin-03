# backend/app/routers/ideas_router.py
# ルート（エンドポイント）の整理
# このファイルはユーザーに関連するエンドポイントを管理します。

from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from .. import schemas, models
from ..database import get_db

# このルーターに追加されるすべてのルート（エンドポイント）は、/ideasから始まる
router = APIRouter(prefix="/ideas", tags=["ideas"])
# router = APIRouter()


@router.get("/get", response_model=list[schemas.Idea])
def read_ideas(db: Session = Depends(get_db)):
    return db.query(models.Idea).all()


@router.post("/post", response_model=schemas.Idea)
def create_idea(idea: schemas.IdeaCreate, db: Session = Depends(get_db)):
    db_idea = models.Idea(text=idea.text)
    db.add(db_idea)
    db.commit()
    db.refresh(db_idea)
    return db_idea
