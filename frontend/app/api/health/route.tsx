export async function GET() {
  try {
    // Use the Docker service name instead of localhost
    const response = await fetch("http://backend:8080/api/health", {
      signal: AbortSignal.timeout(5000),
    });
    if (!response.ok) {
      console.error(`Backend returned status: ${response.status}`);
      return Response.json(
        {
          status: `Error: Backend returned ${response.status}`,
        },
        { status: 502 }
      );
    }
    const data = await response.json();
    return Response.json(data);
  } catch (error) {
    // Add type checking for the error
    const errorMessage = error instanceof Error ? error.message : String(error);

    console.error("Backend connection error:", errorMessage);
    return Response.json(
      {
        status: `Connection error: ${errorMessage}`,
      },
      { status: 500 }
    );
  }
}
