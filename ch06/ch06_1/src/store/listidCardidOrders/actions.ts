import type * as T from './types'

// 목록에 추가할 카드 uui의 순서를 목록 uuid에 한꺼번에 설정하려고 할 때 사용
export const setListidCardids = (payload: T.ListidCardidS): T.SetListidCardids => ({
  type: '@listidCardids/set',
  payload
})

// lists에서 특정 목록이 삭제되면 listidCardids쪽에서도 맞추어 삭제해주기 위하여
export const removeListid = (payload: string): T.RemoveListidAction => ({
  type: '@listidCardids/remove',
  payload
})

// 새로운 카드를 목록 앞에 추가하는 용도
export const prependCardidToListid = (
  payload: T.ListidCardid
): T.PrependCardidToListidAction => ({
  type: '@listidCardids/prependCardid',
  payload
})

// 새로운 카드를 목록 가장 마지막에 추가하는 용도
export const appendCardidToListid = (
  payload: T.ListidCardid
): T.AppendCardidToListidAction => ({
  type: '@listidCardids/appendCardid',
  payload
})

// cards쪽에서 특정 카드가 삭제될때 이에 맞충 속해이는 목록의 카드 순서를 기억하는 배열에서도 삭제하는 용도
export const removeCardIdFromListId = (
  payload: T.ListidCardid
): T.RemoveCardidFromListidAction => ({
  type: '@listidCardids/removeCardid',
  payload
})
