export async function POST(req: Request) {
  const data = await req.json().catch(() => ({}))
  console.log("Contact form submission:", data)
  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  })
}
