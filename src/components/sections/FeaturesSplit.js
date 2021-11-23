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
      title: 'The perfect angle, every time.',
      paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore aliqua.'
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
                  <h3 className="mt-0 mb-16 reveal-from-left" data-reveal-container=".split-item">
                    Feature #1 (FeatureSplit)
                  </h3>
                  <p className="m-0 reveal-from-left" data-reveal-delay="100" data-reveal-container=".split-item">
                    yada yada yada
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
                    src={require('./../../assets/images/features-split-image.svg')}
                    className="has-shadow"
                    alt="Features split 01"
                    width={528}
                    height={396} />
                  <div style={img01Style}>
                    <Image
                      src={require('./../../assets/images/features-split-top-01.svg')}
                      alt="Features split top 01"
                      width={538}
                      height={396} />
                  </div>
                </div>
              </div>

              <div className="split-item">
                <div className="split-item-content center-content-mobile">
                  <h3 className="mt-0 mb-16 reveal-from-right" data-reveal-container=".split-item">
                    Feature #2
                  </h3>
                  <p className="m-0 reveal-from-right" data-reveal-delay="100" data-reveal-container=".split-item">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
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
                    src={require('./../../assets/images/features-split-image.svg')}
                    className="has-shadow"
                    alt="Features split 02"
                    width={528}
                    height={396} />
                  <div style={img02Style}>
                    <Image
                      src={require('./../../assets/images/features-split-top-02.svg')}
                      alt="Features split top 02"
                      width={528}
                      height={396} />
                  </div>
                </div>
              </div>

              <div className="split-item">
                <div className="split-item-content center-content-mobile">
                  <h3 className="mt-0 mb-16 reveal-from-left" data-reveal-container=".split-item">
                    Feature #3
                  </h3>
                  <p className="m-0 reveal-from-left" data-reveal-delay="100" data-reveal-container=".split-item">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
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
                    src={require('./../../assets/images/features-split-image.svg')}
                    className="has-shadow"
                    alt="Features split 03"
                    width={528}
                    height={396} />
                  <div style={img03Style}>
                    <Image
                      src={require('./../../assets/images/features-split-top-03.svg')}
                      alt="Features split top 03"
                      width={528}
                      height={396} />
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