/**
 * API route to search WordPress content
 * Acts as a proxy to avoid CORS issues in the client
 */
export async function GET(request) {
  try {
    // Get the query and locale from query params
    const { searchParams } = new URL(request.url);
    const query = searchParams.get('query');
    const locale = searchParams.get('locale') || 'bg';
    
    if (!query || query.length < 3) {
      return Response.json([]);
    }
    
    // Fetch data from WordPress in parallel
    const [postsResponse, membersResponse, servicesResponse] = await Promise.all([
      fetch(`https://brd.devclick.net/wp-json/wp/v2/posts?search=${encodeURIComponent(query)}&lang=${locale}`),
      fetch(`https://brd.devclick.net/wp-json/wp/v2/members?search=${encodeURIComponent(query)}&lang=${locale}`),
      fetch(`https://brd.devclick.net/wp-json/wp/v2/services?search=${encodeURIComponent(query)}&lang=${locale}`)
    ]);
    
    // Handle responses
    const posts = postsResponse.ok ? await postsResponse.json() : [];
    const members = membersResponse.ok ? await membersResponse.json() : [];
    const services = servicesResponse.ok ? await servicesResponse.json() : [];
    
    // Format results
    const results = [
      ...posts.map(post => ({
        id: post.id,
        title: post.title.rendered,
        slug: post.slug,
        excerpt: post.excerpt?.rendered,
        type: "blog",
      })),
      ...members.map(member => ({
        id: member.id,
        title: member.title.rendered,
        slug: member.slug,
        type: "team",
      })),
      ...services.map(service => ({
        id: service.id,
        title: service.title.rendered,
        slug: service.slug,
        type: "services",
      })),
    ];
    
    return Response.json(results);
  } catch (error) {
    console.error('Search API error:', error);
    return Response.json(
      [],
      { status: 200 } // Return empty array instead of error to avoid breaking UI
    );
  }
} 