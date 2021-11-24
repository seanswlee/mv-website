import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

class Team extends React.Component {

  render() {

    const {
      className,
      topOuterDivider,
      bottomOuterDivider,      
      topDivider,
      bottomDivider,
      hasBgColor,
      invertColor,
      pushLeft,
      ...props
    } = this.props;

    const outerClasses = classNames(
      'team section center-content',
      topOuterDivider && 'has-top-divider',
      bottomOuterDivider && 'has-bottom-divider',
      hasBgColor && 'has-bg-color',
      invertColor && 'invert-color',
      className
    );

    const innerClasses = classNames(
      'team-inner section-inner',
      topDivider && 'has-top-divider',
      bottomDivider && 'has-bottom-divider'
    );

    const tilesClasses = classNames(
      'tiles-wrap',
      pushLeft && 'push-left'
    );

    const sectionHeader = {
      title: 'The MountainVue Team',
      paragraph: ''
    };

    return (
      <section
        {...props}
        className={outerClasses}
      >
        <div className="team">
          <div className={innerClasses}>
            <SectionHeader data={sectionHeader} className="center-content reveal-from-bottom" />
            <div className={tilesClasses}>

              <div className="tiles-item reveal-from-bottom" data-reveal-container=".tiles-wrap">
                <div className="tiles-item-inner">
                  <div className="team-item-header">
                    <div className="team-item-image mb-24">
                      <Image
                        src={require('./../../assets/images/sean.jpeg')}
                        alt="Team member 01"
                        width={180}
                        height={180} />
                    </div>
                  </div>
                  <div className="team-item-content">
                    <h5 className="team-item-name mt-0 mb-4">
                      Sean Lee
                    </h5>
                    <div className="team-item-role text-xs fw-500 mb-8">
                      Software Engineer
                    </div>
                    <div className="m-0 text-sm socials">
                      <a class="mr-8" href="https://www.linkedin.com/in/seanleesw/" rel="noopener noreferrer" target="_blank">
                        <img src={require("../../assets/images/team-linkedin.svg")} alt="LinkedIn" height="36" width="36"/>
                      </a>
                      <a href="https://github.com/seanswlee" rel="noopener noreferrer" target="_blank">
                        <img src={require("../../assets/images/team-github.svg")} alt="Github" height="30" width="30"/>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="tiles-item reveal-from-bottom" data-reveal-container=".tiles-wrap" data-reveal-delay="150">
                <div className="tiles-item-inner">
                  <div className="team-item-header">
                    <div className="team-item-image mb-24">
                      <Image
                        src={require('./../../assets/images/matt.jpeg')}
                        alt="Team member 02"
                        width={180}
                        height={180} />
                    </div>
                  </div>
                  <div className="team-item-content">
                    <h5 className="team-item-name mt-0 mb-4">
                      Matthew Huang
                    </h5>
                    <div className="team-item-role text-xs fw-500 mb-8">
                      Software Engineer
                    </div>
                    <div className="m-0 text-sm socials">
                      <a class="mr-8" href="https://www.linkedin.com/in/matthew-huang/" rel="noopener noreferrer" target="_blank">
                        <img src={require("../../assets/images/team-linkedin.svg")} alt="LinkedIn" height="36" width="36"/>
                      </a>
                      <a href="https://github.com/matthewhuang24" rel="noopener noreferrer" target="_blank">
                        <img src={require("../../assets/images/team-github.svg")} alt="Github" height="30" width="30"/>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="tiles-item reveal-from-bottom" data-reveal-container=".tiles-wrap" data-reveal-delay="300">
                <div className="tiles-item-inner">
                  <div className="team-item-header">
                    <div className="team-item-image mb-24 illustration-element-05">
                      <Image
                        src={require('./../../assets/images/sohee.jpeg')}
                        alt="Team member 03"
                        width={180}
                        height={180} />
                    </div>
                  </div>
                  <div className="team-item-content">
                    <h5 className="team-item-name mt-0 mb-4">
                      Sohee Lee
                    </h5>
                    <div className="team-item-role text-xs fw-500 mb-8">
                      Software Engineer
                    </div>
                    <div className="m-0 text-sm socials">
                      <a class="mr-8" href="https://www.linkedin.com/in/sohee-lee-1ab46a107/" rel="noopener noreferrer" target="_blank">
                        <img src={require("../../assets/images/team-linkedin.svg")} alt="LinkedIn" height="36" width="36"/>
                      </a>
                      <a href="https://github.com/sohee419" rel="noopener noreferrer" target="_blank">
                        <img src={require("../../assets/images/team-github.svg")} alt="Github" height="30" width="30"/>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="tiles-item reveal-from-bottom" data-reveal-container=".tiles-wrap" data-reveal-delay="450">
                <div className="tiles-item-inner">
                  <div className="team-item-header">
                    <div className="team-item-image mb-24 illustration-element-06">
                      <Image
                        src={require('./../../assets/images/ryan.jpeg')}
                        alt="Team member 04"
                        width={180}
                        height={180} />
                    </div>
                  </div>
                  <div className="team-item-content">
                    <h5 className="team-item-name mt-0 mb-4">
                      Ryan Lim
                    </h5>
                    <div className="team-item-role text-xs fw-500 mb-8">
                      Software Engineer
                    </div>
                    <div className="m-0 text-sm socials">
                      <a class="mr-8" href="https://www.linkedin.com/in/ryanlim3" rel="noopener noreferrer" target="_blank">
                        <img src={require("../../assets/images/team-linkedin.svg")} alt="LinkedIn" height="36" width="36"/>
                      </a>
                      <a href="https://github.com/ryanlim1" rel="noopener noreferrer" target="_blank">
                        <img src={require("../../assets/images/team-github.svg")} alt="Github" height="30" width="30"/>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="tiles-item reveal-from-bottom" data-reveal-container=".tiles-wrap" data-reveal-delay="450">
                <div className="tiles-item-inner">
                  <div className="team-item-header">
                    <div className="team-item-image mb-24 illustration-element-06">
                      <Image
                        src={require('./../../assets/images/andy.jpeg')}
                        alt="Team member 05"
                        width={180}
                        height={180} />
                    </div>
                  </div>
                  <div className="team-item-content">
                    <h5 className="team-item-name mt-0 mb-4">
                      Andy Tsou
                    </h5>
                    <div className="team-item-role text-xs fw-500 mb-8">
                      Software Engineer & Mentor
                    </div>
                    <div className="m-0 text-sm socials">
                      <a class="mr-8" href="https://www.linkedin.com/in/andy-tsou/" rel="noopener noreferrer" target="_blank">
                        <img src={require("../../assets/images/team-linkedin.svg")} alt="LinkedIn" height="36" width="36" />
                      </a>
                      <a href="https://github.com/andytsou19" rel="noopener noreferrer" target="_blank">
                        <img src={require("../../assets/images/team-github.svg")} alt="Github" height="30" width="30" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

Team.propTypes = propTypes;
Team.defaultProps = defaultProps;

export default Team;