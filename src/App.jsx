import { AppRouter } from "./routes/AppRouter"
import { AppTheme } from "./theme"

export const App = () => {
  return (
    <>
      <AppTheme>
        <AppRouter/>
      </AppTheme>
    </>
  )
}
