# backend/app/routers/ideas_router.py
# ルート（エンドポイント）の整理
# このファイルはユーザーに関連するエンドポイントを管理します。

from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from .. import schemas, models
from ..database import get_db

# このルーターに追加されるすべてのルート（エンドポイント）は、/ideasから始まる
router = APIRouter(tags=["ideas"])


# 作成済みのアイデアを取得
@router.get("/ideas", response_model=list[schemas.Idea])
def read_ideas(db: Session = Depends(get_db)):
    return db.query(models.Idea).all()


# アイデア新規作成
@router.post("/ideas", response_model=schemas.Idea)
def create_idea(idea: schemas.IdeaCreate, db: Session = Depends(get_db)):
    db_idea = models.Idea(text=idea.text)
    db.add(db_idea)
    db.commit()
    db.refresh(db_idea)
    return db_idea


# アイデアを削除
@router.delete("/ideas/{id}", response_model=schemas.Idea)
def delete_idea(id: int, db: Session = Depends(get_db)):
    # データベースからアイデアを検索
    db_idea = db.query(models.Idea).filter(models.Idea.id == id).first()
    if db_idea is None:
        raise HTTPException(status_code=404, detail="Idea not found")
    db.delete(db_idea)
    db.commit()
    return db_idea


# アイデアを編集
@router.put("/ideas/{id}", response_model=schemas.Idea)
def update_idea(id: int, idea: schemas.IdeaCreate, db: Session = Depends(get_db)):
    existing_idea = db.query(models.Idea).filter(models.Idea.id == id).first()
    if not existing_idea:
        raise HTTPException(status_code=404, detail="Idea not found")

    existing_idea.text = idea.text
    db.add(existing_idea)
    db.commit()
    db.refresh(existing_idea)
    return existing_idea
