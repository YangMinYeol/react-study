import {useCallback} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Title} from '../components'
import * as D from '../data'
import type {AppState} from '../store'
import * as E from '../store/errorMessage'
import {Button} from '../theme/daisyui'

export default function ErrorMessageTest() {
  const dispatch = useDispatch()
  const errorMessage = useSelector<AppState, E.State>(({errorMessage}) => errorMessage)

  const generateErrorMessage = useCallback(() => {
    dispatch<any>(E.generateErrorMessage(D.randomSentence()))
  }, [dispatch])

  return (
    <section className="mt-4">
      <Title>ErrorMessageTest</Title>
      <div className="mt-4">
        <div className="flex justify-center mt-4">
          <Button className="btn btn-sm btn-primary" onClick={generateErrorMessage}>
            generate error message
          </Button>
        </div>
        {errorMessage.length && (
          <div className="flex items-center justify-center bh-red-200">
            <p className="text-2xl text-red-600 text-bold">error: {errorMessage}</p>
          </div>
        )}
      </div>
    </section>
  )
}
