const api = process.env.WHOIS_API_KEY;

export async function POST(req) {
    const body = await req.json();
    console.log(api)
    const domain = body.domain;
    const url = `https://www.whoisxmlapi.com/whoisserver/WhoisService?apiKey=${api}&domainName=${domain}&outputFormat=JSON`;
    try {
        const response = await fetch(url, {
            headers: {
                'Accept': 'application/json'
            }
        });
        if (!response.ok) {
            throw new Error(`Error fetching data: ${response.statusText}`);
        }
        const data = await response.json();
        const record = data.WhoisRecord
        const simplifiedData = {
            domainName: record.domainName || "Not available",
            createdDate: record.createdDate || "Not available",
            expiresDate: record.expiresDate || "Not available",
            registrarName: record.registrarName || "Not available",
            nameServers: record.nameServers?.hostNames || [],
            registrant: record.registrant?.organization || record.registrant?.name || "Not available",
        };
        return new Response(JSON.stringify(simplifiedData), { status: 200, headers: { "Content-Type": "application/json" } });
    } catch (e) {
        return new Response(JSON.stringify({ error: e.message }), { status: 500 });
    }
}