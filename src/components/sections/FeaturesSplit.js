import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

class FeaturesSplit extends React.Component {

  render() {

    const {
      className,
      topOuterDivider,
      bottomOuterDivider,      
      topDivider,
      bottomDivider,
      hasBgColor,
      invertColor,
      invertMobile,
      invertDesktop,
      alignTop,
      imageFill,
      ...props
    } = this.props;

    const outerClasses = classNames(
      'features-split section',
      topOuterDivider && 'has-top-divider',
      bottomOuterDivider && 'has-bottom-divider',
      hasBgColor && 'has-bg-color',
      invertColor && 'invert-color',
      className
    );

    const innerClasses = classNames(
      'features-split-inner section-inner',
      topDivider && 'has-top-divider',
      bottomDivider && 'has-bottom-divider'
    );

    const splitClasses = classNames(
      'split-wrap',
      invertMobile && 'invert-mobile',
      invertDesktop && 'invert-desktop',
      alignTop && 'align-top'
    );

    const sectionHeader = {
      title: 'A VS Code Extension that aims to create a bridge between component hierarchy and visualization of your Vue application structure...',
      paragraph: 'Vue.js application development promotes modularity in SPAs as well as reducing development speeds due to its progressively optimized and performant ecosystem. MountainVue adopts this infrastructure to rapidly render component trees in the sidebar panel to generate their relationships and properties'
    };

    return (
      <section
        {...props}
        className={outerClasses}
      >
        <div className="container">
          <div className={innerClasses}>
            <SectionHeader data={sectionHeader} className="center-content" />
            <div className={splitClasses}>

              <div className="split-item">
                <div className="split-item-content center-content-mobile">
                  <h3 className="mt-0 mb-16 reveal-from-left" data-reveal-container=".split-item" >
                    Access top-level components and their children
                  </h3>
                  <p className="m-0 reveal-from-left" data-reveal-delay="100" data-reveal-container=".split-item">
                    We are currently uploading a JSON format of the entire component directory but are in the works of having the business logic to parse through Vue-based file extensions to convert our current output with the expected core feature to generate the component tree.
                  </p>
                </div>
                <div className={
                  classNames(
                    'split-item-image center-content-mobile illustration-element-01 reveal-from-botto',
                    imageFill && 'split-item-image-fill'
                  )}
                  data-reveal-container=".split-item"
                  data-reveal-delay="200">
                  <Image
                    src={require('./../../assets/gifs/feature-1.gif')}
                    className="has-shadow"
                    alt="Features split 01"
                    width={528}
                    height={396} />
                  {/* <div style={img01Style}>
                    <Image
                      src={require('./../../assets/images/features-split-top-01.svg')}
                      alt="Features split top 01"
                      width={538}
                      height={396} />
                  </div> */}
                </div>
              </div>

              <div className="split-item">
                <div className="split-item-content center-content-mobile">
                  <h3 className="mt-0 mb-16 reveal-from-right" data-reveal-container=".split-item">
                    Component hierarchy tree generated using Vue.js (v3)
                  </h3>
                  <p className="m-0 reveal-from-right" data-reveal-delay="100" data-reveal-container=".split-item">
                    Capitalizing on the flexibility and size-efficient runtime environment in Vue.js, you can visualize the rendering of your components and their children in a file-like structure the moment you upload a component.
                  </p>
                </div>
                <div className={
                  classNames(
                    'split-item-image center-content-mobile illustration-element-02 reveal-from-bottom',
                    imageFill && 'split-item-image-fill'
                  )}
                  data-reveal-container=".split-item"
                  data-reveal-delay="200">
                  <Image
                    src={require('./../../assets/gifs/feature-2.gif')}
                    className="has-shadow"
                    alt="Features split 02"
                    width={528}
                    height={396} />
                  {/* <div style={img02Style}>
                    <Image
                      src={require('./../../assets/images/features-split-top-02.svg')}
                      alt="Features split top 02"
                      width={528}
                      height={396} />
                  </div> */}
                </div>
              </div>

              <div className="split-item">
                <div className="split-item-content center-content-mobile">
                  <h3 className="mt-0 mb-16 reveal-from-left" data-reveal-container=".split-item">
                    Development Stage: ALPHA
                  </h3>
                  <p className="m-0 reveal-from-left" data-reveal-delay="100" data-reveal-container=".split-item">
                    MountainVue is still under development as our application depends on the core parsing logic for Vue component uploads. As the client and UI side of our application are in optimization stages, our focus will shift towards a full implementation of our core feature. Stay tuned!
                  </p>
                </div>
                <div className={
                  classNames(
                    'split-item-image center-content-mobile illustration-element-03 reveal-from-bottom',
                    imageFill && 'split-item-image-fill'
                  )}
                  data-reveal-container=".split-item"
                  data-reveal-delay="200">
                  <Image
                    src={require('./../../assets/images/mv-prototype.svg')}
                    className="has-shadow"
                    alt="Features split 03"
                    width={528}
                    height={396} />
                  {/* <div style={img03Style}>
                    <Image
                      src={require('./../../assets/images/features-split-top-03.svg')}
                      alt="Features split top 03"
                      width={528}
                      height={396} />
                  </div> */}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    );
  }
}

const img01Style = {
  position: 'absolute',
  bottom: '-4.8%',
  right: '-2-27%'
}

const img02Style = {
  position: 'absolute',
  top: '-5.05%',
  left: '-6.06%'
}

const img03Style = {
  position: 'absolute',
  bottom: '-0.5%',
  right: '-16.67%'
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;