export function track(event: string, props?: Record<string, any>) {
  if ((window as any).plausible) {
    (window as any).plausible(event, { props });
  }
}
