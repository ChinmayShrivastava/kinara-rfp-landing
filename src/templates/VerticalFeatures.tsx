import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="Our Core Offerings"
    description="We break-down complex RFP solicitations and generate comprehensive outlines, checklists, and quality content so you can respond to RFPs in hours, not weeks."
  >
    <VerticalFeatureRow
      title="Teach Kinara Abour your Organization"
      description="Kinara takes in your past RFX submissions and extracts all the relevant information to understand your organization’s strengths and weaknesses."
      image="/assets/images/upload_past_submissions.png"
      imageAlt="eligibility criteria"
    />
    <VerticalFeatureRow
      title="Get Recomendations"
      description="Kinara searches through its database of active RFPs and provides you with a curated list of RFPs that match your strengths."
      image="/assets/images/rfx_recommendations.png"
      imageAlt="compliance checklist"
      reverse
    />
    <VerticalFeatureRow
      title="Generate Draft in Minutes"
      description="Kinara then generates a draft response to the RFP, which you can review, edit and submit."
      image="/assets/images/generated_draft.png"
      imageAlt="review proposal"
    />
  </Section>
);

export { VerticalFeatures };
