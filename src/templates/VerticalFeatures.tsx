import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="Our Core Offerings"
    description="We break-down complex RFP solicitations and generate comprehensive outlines, checklists, and quality content so you can respond to RFPs in hours, not weeks."
  >
    <VerticalFeatureRow
      title="Determine Eligibility Instantly"
      description="Kinara extracts eligibility criteria so you can quickly determine if this RFP is for you without having to comb through a 98 page PDF."
      image="/assets/images/questionnaire.png"
      imageAlt="eligibility criteria"
    />
    <VerticalFeatureRow
      title="Comprehensive Compliance Checklist"
      description="Kinara compiles a bullet-proof checklist in 5 minutes so your team knows exactly what’s required and splits the work accordingly."
      image="/assets/images/table.png"
      imageAlt="compliance checklist"
      reverse
    />
    <VerticalFeatureRow
      title="Apply with Confidence"
      description="Kinara compares your final proposal with the original request, ensuring all important points are covered so you can submit a strong bid."
      image="/assets/images/review.png"
      imageAlt="review proposal"
    />
  </Section>
);

export { VerticalFeatures };
