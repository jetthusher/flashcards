import React from "react"
import { AppBar, Toolbar, Typography } from "@material-ui/core"

const Shell: React.FC = ({ children }) => (
  <>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">News</Typography>
      </Toolbar>
    </AppBar>
    {children}
  </>
)

export default Shell
