import type { Project } from "@/lib/types";
import vaikunth from "./vaikunth";
import rajradhaNilayam from "./rajradha-nilayam";
import { placeholderProjects } from "./placeholders";

export const allProjects: Project[] = [vaikunth, rajradhaNilayam, ...placeholderProjects];

export const publishedProjects = allProjects.filter((p) => p.published);

export const featuredSlugs = ["vaikunth"];

export function getProjectBySlug(slug: string): Project | undefined {
  return allProjects.find((p) => p.slug === slug);
}
