import { useState } from "react";
import bgImg from "../assets/bg.jpg"

export default function BrainTumorPrediction() {
    const [prediction, setPrediction] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("file", e.target.fileInput.files[0]);

        const response = await fetch("http://127.0.0.1:5000/predict", {
            method: "POST",
            body: formData,
        });

        const result = await response.json();
        setPrediction(result.prediction);
    };

    return (
        <div style={{
            fontFamily: "Arial, sans-serif",
            backgroundImage: `url(${bgImg})`,
            color: "#333",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh"
        }}>
            <div style={{
                backgroundColor: "white",
                borderRadius: "8px",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                padding: "20px",
                maxWidth: "400px",
                width: "100%",
                textAlign: "center"
            }}>
                <h1 style={{
                    marginBottom: "20px",
                    fontSize: "24px",
                    color: "#187041"
                }}>Brain Tumor Prediction</h1>
                <form onSubmit={handleSubmit} style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "15px"
                }}>
                    <input type="file" name="fileInput" style={{
                        padding: "8px",
                        border: "1px solid #ddd",
                        borderRadius: "4px"
                    }} />
                    <button type="submit" style={{
                        padding: "10px",
                        backgroundColor: "#187041",
                        color: "white",
                        border: "none",
                        borderRadius: "4px",
                        cursor: "pointer",
                        fontSize: "16px"
                    }}>Predict</button>
                </form>
                {prediction && <p style={{
                    marginTop: "20px",
                    fontSize: "18px",
                    fontWeight: "bold",
                    color: "#333"
                }}>{prediction}</p>}
            </div>
        </div>
    );
}
