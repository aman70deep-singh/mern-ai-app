import { Handle, Position } from "reactflow";

const ResultNode = ({ data }) => {
    const { text, loading } = data;

    return (
        <div
            style={{
                width: "95vw",
                height: "72vh",
                background: "#000",
                borderRadius: 16,
                padding: 20,
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
            }}
        >
            <div
                style={{
                    fontWeight: 600,
                    marginBottom: 12,
                }}
            >
                Result
            </div>

            <div
                style={{
                    flex: 1,
                    overflowY: "auto",
                    padding: 16,
                    background: "#000",
                    borderRadius: 12,
                    fontSize: 14,
                    lineHeight: "1.6",
                    whiteSpace: "pre-wrap",
                    pointerEvents: "auto",
                    cursor: "text",
                    userSelect: "text",
                }}
            >
                {loading
                    ? "Generating AI response..."
                    : text || "AI response will appear here"}
            </div>

            <Handle type="target" position={Position.Left} />
        </div>
    );
};

export default ResultNode;
