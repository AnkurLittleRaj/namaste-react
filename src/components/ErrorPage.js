import React from 'react'
import {useRouteError} from 'react-router-dom'
function ErrorPage() {
    const err = useRouteError();
  return (
    <div>ErrorPage:

        {err.statusText}
    </div>
  )
}

export default ErrorPage