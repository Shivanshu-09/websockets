from fastapi import FastAPI, WebSocket, WebSocketDisconnect

app = FastAPI()

@app.get("/root")
async def main_page():
    return {"data": "home"}

@app.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    print("Inside websocket connection")
    await websocket.accept()
    try:
        while True:
            print("Hello world")
            data = await websocket.receive_text()
            print("data received", data)
            await websocket.send_text("Thank you for now") # Echo back the message
            # You can add more complex logic here, like broadcasting to multiple clients
    except WebSocketDisconnect:
        print("Client disconnected")
    except Exception as e:
        print(f"Error: {e}")