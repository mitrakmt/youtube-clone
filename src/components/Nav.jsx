class Nav extends React.Componenet {

  constructor (props) {
    super(props);
    this.state = {
      leftNav: false
    };
  };

  showLeft({
    this.refs.left.show();
  });

  render() {
    return (
      <nav className="navbar">
        <i className="fa fa-bars menu-icon fa-2x" onClick={this.showLeft} aria-hidden="true"></i>
        <div className="col-md-6 col-md-offset-3">
          <Search searchVideos={props.searchVideos} />
        </div>

        <Menu ref="left" alignment="left">
          <MenuItem>First Page</MenuItem>
          <MenuItem>Second Page</MenuItem>
          <MenuItem>Third Page</MenuItem>
        </Menu>
      </nav>
    )
  }
}

window.Nav = Nav;
