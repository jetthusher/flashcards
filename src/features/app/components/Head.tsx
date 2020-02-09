import React from "react"
import { Helmet } from "react-helmet-async"
import { connect } from "react-redux"
import { RootState } from "../../../store/types"
import { getPageTitle } from "../selectors"

const mapStateToProps = (state: RootState) => ({
  pageTitle: getPageTitle(state),
})

type HeadProps = ReturnType<typeof mapStateToProps>
const Head: React.FC<HeadProps> = ({ pageTitle }) => (
  <Helmet>
    <title>{pageTitle}</title>
  </Helmet>
)

export default connect(mapStateToProps)(Head)
