export const newUser = async (data) => {
    const res = await fetch(`${process.env.REACT_APP_API_URL}/auth/signin`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    return await res.json();
}