export function formatDeps(dependencies: Record<string, string>) {
  return Object.entries(dependencies).map(([name, version]) => ({
    name,
    version,
  }));
}
