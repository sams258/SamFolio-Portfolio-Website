import type { NextApiRequest, NextApiResponse } from 'next';

type Repo = {
  id: number;
  name: string;
  description: string;
  html_url: string;
  language: string;
  topics: string[];
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { GITHUB_TOKEN, GITHUB_USERNAME } = process.env;

  if (!GITHUB_TOKEN || !GITHUB_USERNAME) {
    res.status(500).json({ error: 'GitHub token or username is not set.' });
    return;
  }

  try {
    const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos`, {
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
        Accept: 'application/vnd.github.mercy-preview+json', // Enables the topics field
      },
    });

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.statusText}`);
    }

    const data: Repo[] = await response.json();

    // Filter repositories by topics
    const selectedTopics = ['fetched']; 
    const projects = data
      .filter((repo) => repo.topics.some((topic) => selectedTopics.includes(topic)))
      .map((repo) => ({
        id: repo.id,
        name: repo.name,
        description: repo.description,
        html_url: repo.html_url,
        language: repo.language,
        topics: repo.topics,
      }));

    res.status(200).json(projects);
  } catch (error) {
    console.error('Error fetching GitHub repos:', error);
    res.status(500).json({ error: 'Failed to fetch GitHub repositories.' });
  }
}
