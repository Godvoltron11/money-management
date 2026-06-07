import './App.css'
import type { ComponentType } from 'react'
import Login from './pages/login';

const LoginComponent = Login as ComponentType

export default function App() {  
  return <LoginComponent />
}
