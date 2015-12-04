'use strict';

var React = require('react');
var ReactLiberty = require('../../src/index');
var AppAsset = require('../components/app-asset.jsx');
var CategoryAsset = require('../components/category-asset.jsx');
var Menu = require('../components/menu.jsx');
var List = require('../components/list/list.jsx');
var Motion = require('react-motion').Motion;
var spring = require('react-motion').spring;
var appService = require('../services/applications-service');

var FocusManager = require('improved-navigation-concept').FocusManager;

class ForYou extends React.Component {
  componentDidMount() {
    FocusManager.initializeFocus();
    document.addEventListener('keydown', this.onKeyDown.bind(this));
  }

  onKeyDown(e) {
    switch (e.keyCode) {
      case 37:
        FocusManager.doLeft();
        break;
      case 39:
        FocusManager.doRight();
        break;
      case 40:
        FocusManager.doDown();
        break;
      case 38:
        FocusManager.doUp();
        break;
    }
  }

  render() {
    var styles = {
      container: {
        flexDirection: 'column'
      },
      verticalList: {
        height: 600
      },
      caruselRow: {
        height: 261
      },
      categoriesCaruselRow: {
        height: 261
      },
      categoriesCarusel: {
        paddingTop: 70,
        width: 1140,
        height: 206
      },
      carusel: {
        marginBottom: 55,
        width: 1140,
        height: 206
      },
      headerStyle: {
        fontFamily: 'InterstatePro-Light',
        height: 20,
        marginBottom: 10,
        fontSize: 24,
        color: '#ffffff'
      }
    };

    return (
      <div>
        <Menu/>
        <main style={styles.divStyle}>
          <Div style={styles.container}>
            <List style={styles.verticalList} orientation="vertical">
              <Div style={styles.caruselRow}>
                <P style={styles.headerStyle}>Featured</P>
                <List style={styles.carusel}
                      itemClass={AppAsset}
                      data={appService.getFeatured().slice(0,10)}/>
              </Div>
              <Div style={styles.caruselRow}>
                <P style={styles.headerStyle}>Recently used</P>
                <List style={styles.carusel}
                      itemClass={AppAsset}
                      data={appService.getApplicationsByCategory('games')}/>
              </Div>
              <Div style={styles.categoriesCaruselRow}>
                <List style={styles.categoriesCarusel}
                      itemClass={CategoryAsset}
                      data={appService.getCategories()}/>
              </Div>
              <Div style={styles.caruselRow}>
                <P style={styles.headerStyle}>News</P>
                <List style={styles.carusel}
                      itemClass={AppAsset}
                      data={appService.getApplicationsByCategory('news')}/>
              </Div>
              <Div style={styles.caruselRow}>
                <P style={styles.headerStyle}>Music</P>
                <List style={styles.carusel}
                      itemClass={AppAsset}
                      data={appService.getApplicationsByCategory('music')}/>
              </Div>
            </List>
          </Div>
        </main>
      </div>
    );
  }
}

module.exports = ForYou;