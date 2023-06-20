import {useMemo} from 'react'
import {DragDropContext} from 'react-beautiful-dnd'
import {ListDroppable, Title} from '../../components'
import BoardList from '../BoardList'
import CreateListForm from './CreateListForm'
import {useLists} from '../../store/useLists'

export default function Board() {
  const {lists, onRemoveList, onCreateList, onMoveList, onDragEnd} = useLists()

  const children = useMemo(
    () =>
      lists.map((list, index) => (
        <BoardList
          key={list.uuid}
          list={list}
          onRemoveList={onRemoveList(list.uuid)}
          index={index}
          onMoveList={onMoveList}
        />
      )),
    [lists, onRemoveList, onMoveList]
  )

  return (
    <section className="mt-4">
      <Title>Board</Title>
      <DragDropContext onDragEnd={onDragEnd}>
        <ListDroppable className="flex flex-row p-2 mt-4">
          <div className="flex flex-wrap p-2 mt-4">
            {children}
            <CreateListForm onCreateList={onCreateList} />
          </div>
        </ListDroppable>
      </DragDropContext>
    </section>
  )
}
