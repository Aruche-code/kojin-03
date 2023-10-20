# backend/app/routers/user_router.py
# ルート（エンドポイント）の整理
# このファイルはユーザーに関連するエンドポイントを管理します。

from fastapi import APIRouter, Depends, HTTPException, status
from typing import List
from sqlalchemy.orm import Session
from .. import schemas, models
from ..database import get_db

router = APIRouter()


# ユーザ作成
@router.post("/users", response_model=schemas.UserResponse)
async def create_user(user: schemas.CreateUserRequest, db: Session = Depends(get_db)):
    db_user = models.User(name=user.name, age=user.age)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    # スキーマに合わせてレスポンスを構築
    return schemas.UserResponse(id=db_user.id, name=db_user.name, age=db_user.age)


@router.get("/users", response_model=List[schemas.UserResponse])
async def read_users(db: Session = Depends(get_db)):
    users = db.query(models.User).all()
    # レスポンススキーマに従って各ユーザーオブジェクトを構築
    return [
        schemas.UserResponse(id=user.id, name=user.name, age=user.age) for user in users
    ]


@router.get("/users{user_id}", response_model=schemas.UserResponse)
async def read_user(user_id: int, db: Session = Depends(get_db)):
    user = db.query(models.User).filter(models.User.id == user_id).first()
    if user is None:
        raise HTTPException(status_code=404, detail="User not found")
    return schemas.UserResponse(id=user.id, name=user.name, age=user.age)


@router.put("/users{user_id}", response_model=schemas.UserResponse)
async def update_user(
    user_id: int, user_request: schemas.UpdateUserRequest, db: Session = Depends(get_db)
):
    # データベースからユーザーを取得
    db_user = db.query(models.User).filter(models.User.id == user_id).first()

    if db_user is None:
        raise HTTPException(status_code=404, detail="User not found")

    # 更新情報を適用
    db_user.name = user_request.name
    db_user.age = user_request.age
    db.commit()
    db.refresh(db_user)

    return db_user  # 既存のレスポンスモデルを使用


@router.delete("/users{user_id}", response_model=schemas.DeleteUserResponse)
async def delete_user(user_id: int, db: Session = Depends(get_db)):
    # 削除前にユーザーの存在を確認
    db_user = db.query(models.User).filter(models.User.id == user_id).first()
    if db_user is None:
        raise HTTPException(status_code=404, detail="User not found")

    db.delete(db_user)
    db.commit()

    return {"message": "User successfully deleted"}
