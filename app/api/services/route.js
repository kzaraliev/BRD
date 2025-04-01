/**
 * API route to fetch services from WordPress
 * Acts as a proxy to avoid CORS issues in the client
 */
export async function GET(request) {
  try {
    // Get the locale from query params
    const { searchParams } = new URL(request.url);
    const locale = searchParams.get('locale') || 'bg';
    
    // Construct the WordPress API URL
    const apiUrl = `https://brd.devclick.net/wp-json/wp/v2/services?_fields=id,slug,yoast_head_json,title&per_page=16&lang=${locale}`;
    
    // Make the request to WordPress
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      next: { revalidate: 60 },
    });
    
    if (!response.ok) {
      return Response.json(
        { error: `WordPress API error: ${response.status}` },
        { status: response.status }
      );
    }
    
    // Get the data
    const data = await response.json();
    
    // Return the response
    return Response.json(data);
  } catch (error) {
    console.error('Services API error:', error);
    return Response.json(
      { error: 'Failed to fetch services' },
      { status: 500 }
    );
  }
} 