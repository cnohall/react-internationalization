import {  Suspense  } from 'react';
import App from './App';




export default function WrappedApp() {
  return (
    <Suspense fallback="...is loading">
        <App/>
    </Suspense>
  );
}
