import CloseRounded from '@material-ui/icons/CloseRounded';
import MenuRounded from '@material-ui/icons/MenuRounded';
import { Link, useStaticQuery } from 'gatsby';
import { graphql } from 'gatsby';
import React, { useCallback, useMemo } from 'react';
import posed, { PoseGroup } from 'react-pose';
import { ReduxState } from 'reducer';
import { TOGGLE_SIDEBAR } from 'reducer/application.actions';
import { Dispatch } from 'redux';
import { useDispatch, useMappedState } from 'redux-react-hook';
import './styles.module.scss';

const SidebarWrapper = posed.div({
  enter: {
    x: '0%',
    transition: {
      ease: 'easeOut',
      duration: 350,
    },
  },
  exit: {
    x: '-100%',
    transition: {
      ease: 'easeIn',
      duration: 350,
    },
  },
});

const query = graphql`query {
  allSitePage {
    edges {
      node {
        componentPath,
        path
      }
    }
  },
  allJavascriptFrontmatter {
    edges {
      node {
        frontmatter {
          title
          categories
          description
          error
        },
        fileAbsolutePath
      }
    }
  }
}`;

interface AllSitePageEdge {
  node: {
    componentPath: string,
    path: string,
  };
}

interface FrontmatterNode {
  title: string;
  categories: string;
  description: string;
  error: boolean;
}

interface AllJavascriptFrontmatterEdge {
  node: {
    frontmatter: FrontmatterNode,
    fileAbsolutePath: string,
  };
}

interface NavQuery {
  allSitePage: {
    edges: AllSitePageEdge[],
  };
  allJavascriptFrontmatter: {
    edges: AllJavascriptFrontmatterEdge[],
  };
}

interface NavItem extends FrontmatterNode {
  path: string;
}

const getNavItems = (queryData: NavQuery): NavItem[] => {
  if (!queryData) return [];
  return queryData.allJavascriptFrontmatter.edges.map((fmEdge: any) => {
    const matchingAspEdge = queryData.allSitePage.edges.find((aspEdge: any) =>
      aspEdge.node.componentPath === fmEdge.node.fileAbsolutePath) as AllSitePageEdge;

    return { ...fmEdge.node.frontmatter, path: matchingAspEdge.node.path };
  });
};

const Sidebar = () => {
  const dispatchProps = useCallback(() => mapDispatchToProps(useDispatch()), []);
  const mapState = useCallback(mapStateToProps, []);
  const { active } = useMappedState(mapState);
  const { toggleSidebar } = dispatchProps();

  const navItems = getNavItems(useStaticQuery(query));

  return (
    <>
      <div styleName='activation-button' onClick={toggleSidebar}>
        <MenuRounded styleName='icon' fontSize='large'/>
      </div>
      {active && <div styleName='invisible-overlay' onClick={toggleSidebar}/>}
      <PoseGroup>
        {active &&
        <SidebarWrapper
          key='sidebar'
          styleName='container'
        >
          <div styleName='sidebar-brand'>
            <CloseRounded
              fontSize='large'
              styleName='icon close-icon'
              onClick={toggleSidebar}
            />
            <Link to={'/'} styleName='sidebar-label'>EXPERIMENTS</Link>
          </div>
          <ul styleName='nav-ul'>
            {navItems.map((item, i) => (
              <li key={i} styleName='nav-li'><Link styleName='nav-link' to={item.path}>{item.title}</Link></li>
            ))}
          </ul>
        </SidebarWrapper>
        }
      </PoseGroup>
    </>
  );
};

const mapStateToProps = ({ application: { showSidebar }}: ReduxState) => {
  return { active: showSidebar };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    toggleSidebar: () => dispatch(TOGGLE_SIDEBAR()),
  };
};

export default Sidebar;
