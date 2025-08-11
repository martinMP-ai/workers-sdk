import crypto from "node:crypto";

export function generateResourceName(type = "worker") {
	// We include the data in the name so it can be used for finding old orphaned resources.
	const now = new Date();
	return `tmp-e2e-${now.toISOString().slice(0, 10)}-${type}-${crypto.randomUUID()}`;
}
