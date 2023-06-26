import type {FC, PropsWithChildren} from 'react'
import {Droppable} from 'react-beautiful-dnd'

export type CardDropableProps = {
  droppableId: string
}

export const CardDropable: FC<PropsWithChildren<CardDropableProps>> = ({
  droppableId,
  children
}) => {
  return (
    <Droppable droppableId={droppableId}>
      {provided => (
        <div
          {...provided.droppableProps}
          ref={provided.innerRef}
          className="flex flex-col p-2">
          {children}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  )
}
