function App() {
  return (
    <div style={{ maxWidth: "500px", margin: "80px auto", textAlign: "center", fontFamily: "sans-serif" }}>
      <h1>Interested in alcohol-free social events?</h1>

      <p>
        We’re exploring alcohol-free evenings focused on real connection.
        Scan the code, leave your email, and we’ll keep you in the loop.
      </p>

      <form>
        <input
          type="email"
          placeholder="Your email"
          style={{
            padding: "12px",
            width: "100%",
            marginBottom: "12px",
            fontSize: "16px"
          }}
        />
        <button
          type="submit"
          style={{
            padding: "12px",
            width: "100%",
            fontSize: "16px",
            cursor: "pointer"
          }}
        >
          Notify me
        </button>
      </form>
    </div>
  );
}

export default App;
