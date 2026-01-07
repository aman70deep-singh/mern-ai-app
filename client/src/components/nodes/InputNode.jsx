import { Handle, Position } from "reactflow";

const InputNode = ({ data }) => {
    const { value, onChange, onGenerate, onSave, loading, canSave } = data;

    return (
        <div
            style={{
                width: "95vw",
                height: "17vh",
                margin: "0 auto",
                background: "#111",
                border: "2px solid #000",
                borderRadius: 20,
                display: "flex",
                alignItems: "center",
                padding: "0 24px",
                boxSizing: "border-box",
                gap: 16,
            }}
        >
            <textarea
                value={value}
                disabled={loading}
                onChange={(e) => onChange(e.target.value)}
                placeholder="Ask anything..."
                style={{
                    flex: 1,
                    height: 70,
                    borderRadius: 10,
                    border: "1px solid #000",
                    padding: 10,
                    fontSize: 14,
                    resize: "none",
                }}
            />

            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 10,
                }}
            >
                <button
                    onClick={() => onGenerate(value)}
                    disabled={loading || !value.trim()}
                    style={{
                        height: 40,
                        width: 120,
                        borderRadius: 10,
                        border: "1px solid #fff",
                        background: "#fff",
                        color: "#000",
                        cursor: "pointer",
                        fontWeight: 400,
                    }}
                >
                    {loading ? "Generating..." : "Generate"}
                </button>

                <button
                    onClick={onSave}
                    disabled={!canSave || loading}
                    style={{
                        height: 40,
                        width: 120,
                        borderRadius: 10,
                        border: "1px solid #fff",
                        background: canSave ? "#fff" : "#999",
                        color: "#000",
                        cursor: canSave ? "pointer" : "not-allowed",
                        fontWeight: 400,
                        opacity: canSave ? 1 : 0.6,
                    }}
                >
                    Save
                </button>
            </div>

            <Handle
                type="source"
                position={Position.Bottom}
                style={{ visibility: "hidden" }}
            />
        </div>
    );
};

export default InputNode;
