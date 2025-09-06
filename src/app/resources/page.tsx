import { ResourcesClient } from "./resources-client";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Resources | Plott Labs Blog & Insights',
  description: 'Thought leadership on CAD, SaaS, and modern emergency response.',
  keywords: 'resources, blog, insights, CAD, emergency response, SaaS, whitepapers, tutorials',
};

export default function ResourcesPage() {
  return <ResourcesClient />;
}
