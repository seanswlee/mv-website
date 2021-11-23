import React from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

class HeroFull extends React.Component {

  render() {
    const {
      className,
      topOuterDivider,
      bottomOuterDivider,      
      topDivider,
      bottomDivider,
      hasBgColor,
      invertColor,
      ...props
    } = this.props;

    const outerClasses = classNames(
      'hero section center-content',
      topOuterDivider && 'has-top-divider',
      bottomOuterDivider && 'has-bottom-divider',
      hasBgColor && 'has-bg-color',
      invertColor && 'invert-color',
      className
    );

    const innerClasses = classNames(
      'hero-inner section-inner pb-0',
      topDivider && 'has-top-divider',
      bottomDivider && 'has-bottom-divider'
    );

    return (
      <section
        {...props}
        className={outerClasses}
        style={sectionStyle}
      >
        <div className="container-sm">
          <div className={innerClasses}>
            <div className="hero-content">
              MV logo here
              <h1 className="mt-0 mb-12 reveal-from-top" data-reveal-delay="150">
                MountainVue
              </h1>
              <div className="container-xs">
                <p className="m-0 mb-32 reveal-from-top" data-reveal-delay="300">
                  Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

const sectionStyle = {
  overflow: 'hidden'
}

HeroFull.propTypes = propTypes;
HeroFull.defaultProps = defaultProps;

export default HeroFull;