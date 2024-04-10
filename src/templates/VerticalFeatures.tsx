import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="Our Core Offerings"
    description= "We help find the right RFPs for you, generate drafts, and provide recommendations to improve your chances of winning bids."
  >
    <VerticalFeatureRow
      title="Teach Kinara Abour your Organization"
      description="Kinara takes in your past RFx submissions so it can learn about your business and recommend new bids and draft proposals for you."
      image="/assets/images/upload_past_submissions.png"
      imageAlt="eligibility criteria"
    />
    <VerticalFeatureRow
      title="RFP Recommendations"
      description="Kinara searches through its database of active RFPs and provides you with a curated list of RFPs that match your strengths."
      image="/assets/images/rfx_recommendations.png"
      imageAlt="compliance checklist"
      reverse
    />
    <VerticalFeatureRow
      title="Generate Draft in Minutes"
      description="Kinara generates a draft response to the RFP, which you can review, edit and submit."
      image="/assets/images/generated_draft.png"
      imageAlt="review proposal"
    />
  </Section>
);

export { VerticalFeatures };
