import { Link } from "react-router-dom"
import "./menu.scss"

const Menu = () => {
  return (
    <div className="menu">
      <div className="item">
        <span className="title">Main</span>
        <Link to="/rawdatapage" className="listItem">
          <img className="listItemIcon" src="" alt="" />
          <span className="listItemTitle">Raw Data</span>
        </Link>
        <Link to="/" className="listItem">
          <img className="listItemIcon" src="" alt="" />
          <span className="listItemTitle">Profile</span>
        </Link>
      </div>
      <div className="item">
        <span className="title">Weather</span>
        <Link to="/weatherpage" className="listItem">
          <img className="listItemIcon" src="" alt="" />
          <span className="listItemTitle">Weather</span>
        </Link>
      </div>
      <div className="item">
        <span className="title">Seismic Array Design</span>
        <Link to="/seismicarraydesignpage" className="listItem">
          <img
            className="listItemIcon"
            src="/static/images/scatter_plot_black_24dp.svg"
            alt=""
          />
          <span className="listItemTitle">Array Design</span>
        </Link>
        <Link to="/seismicarraydesignpage" className="listItem">
          <img
            className="listItemIcon"
            src="/static/images/ssid_chart_black_24dp.svg"
            alt=""
          />
          <span className="listItemTitle">2D Radial Design</span>
        </Link>
        <Link to="/3darrayresponseplotpage" className="listItem">
          <img className="listItemIcon" src="/static/images/app.svg" alt="" />
          <span className="listItemTitle">3D Radial Design</span>
        </Link>
      </div>
    </div>
  )
}
export default Menu
