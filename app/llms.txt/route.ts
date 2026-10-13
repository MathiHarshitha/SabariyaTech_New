import { NextResponse } from "next/server";
import { site, services, products } from "@/data/site";
import { team, portfolio, coreServices } from "@/data/pages";

export const dynamic = "force-static";

export function GET() {
  const liveProjects = portfolio.filter((p) => p.url);

  const content = `# ${site.name}

> ${site.description}

${site.name} is a software development company based in Vijayawada, Andhra Pradesh, India. We build websites, web applications, AI systems, ERP software and SaaS products for businesses across industries.

- Website: ${site.url}
- Email: ${site.email}
- Phone: ${site.phone}
- Address: Vijayawada, Andhra Pradesh 520010, India

## Services

${coreServices.map((s) => `- [${s.title}](${site.url}/services#${s.id}): ${s.body}`).join("\n")}
${services
  .filter((s) => !coreServices.find((c) => c.title === s.title))
  .map((s) => `- ${s.title}: ${s.body}`)
  .join("\n")}

## Products

${products
  .filter((p) => p.id !== "more")
  .map((p) => `- **${p.name}** (${p.status}): ${p.description}${p.url ? ` — ${p.url}` : ""}`)
  .join("\n")}

## Portfolio

${liveProjects.length} live client projects across ${new Set(liveProjects.map((p) => p.sector)).size} industries.

${liveProjects.map((p) => `- [${p.title}](${p.url}) — ${p.sector}: ${p.description}`).join("\n")}

## Team

${team.map((m) => `- [${m.name}](${site.url}/team/${m.slug}): ${m.role} — ${m.short}`).join("\n")}

## Pages

- [Home](${site.url}/): Software development company overview, services, products, portfolio and team
- [About](${site.url}/about): Company story, mission, values and the inspiration behind the name
- [Services](${site.url}/services): Full list of technology services — web platforms, AI, backend, SEO, cloud
- [Products](${site.url}/products): SabariyaTech's own software products including the live LMS Portal
- [Projects](${site.url}/projects): Portfolio of ${portfolio.length} client websites and platforms
- [Team](${site.url}/team): Team profiles with expertise and skills
- [Careers](${site.url}/careers): Open roles and the four-step hiring process
- [Contact](${site.url}/contact): Contact details and project inquiry form
- [Privacy Policy](${site.url}/privacy-policy): Data collection, use and protection practices
- [Terms & Conditions](${site.url}/terms-and-conditions): Terms governing use of the website and services
`.trimEnd();

  return new NextResponse(content, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
