"""Simple Flask server to serve plugin assets from the local static folder."""
from pathlib import Path

from flask import Flask, abort, request as flask_request, send_from_directory


BASE_DIR = Path(__file__).resolve().parent
STATIC_DIR = BASE_DIR / "plugins"

app = Flask(__name__, static_folder=str(STATIC_DIR), static_url_path="")


@app.after_request
def add_cors_headers(response):
    """Allow cross-origin requests from the Sefaria site and extensions."""
    response.headers["Access-Control-Allow-Origin"] = "*"
    response.headers["Access-Control-Allow-Methods"] = "GET, OPTIONS"
    response.headers["Access-Control-Allow-Headers"] = "Content-Type"
    return response


@app.route("/", methods=["GET", "OPTIONS"])
def serve_index():
    """Serve the plugin index or a basic status payload."""
    if flask_request.method == "OPTIONS":
        return ("", 204)
    index_path = STATIC_DIR / "index.json"
    if index_path.exists():
        return send_from_directory(app.static_folder, "index.json")
    return {"status": "ok", "message": f"Serving static files from {STATIC_DIR}."}


@app.route("/<path:filename>", methods=["GET", "OPTIONS"])
def serve_static(filename: str):
    """Serve any file from the plugins directory while blocking path traversal."""
    if flask_request.method == "OPTIONS":
        return ("", 204)
    candidate = (STATIC_DIR / filename).resolve()
    if STATIC_DIR not in candidate.parents or not candidate.is_file():
        abort(404)
    return send_from_directory(app.static_folder, filename)


if __name__ == "__main__":
    app.run(host="127.0.0.1", port=5000, debug=True)
