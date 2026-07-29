// Auto-generated from saved API definitions — regenerated whenever "ReqresDashboard" APIs change. Do not edit by hand.
import type { APIRequestContext } from '@playwright/test';
import env from '@support/env';
import { assertStatus, getByPath, resolveTemplate } from './_runtime';

export class ReqresDashboard {
  async getProductRecords(request: APIRequestContext, vars: Record<string, string>): Promise<Record<string, string>> {
    const url = new URL(resolveTemplate("https://reqres.in/api/collections/products/records", vars, env));
    const headers: Record<string, string> = {};
    headers["x-api-key"] = resolveTemplate("dev_f68055901af82490e2359d13dacbf19d86a9f3beda2f9266", vars, env);
    const res = await request.get(url.toString(), { headers });
    const body: unknown = await res.json().catch(() => null);
    assertStatus(res.status(), [], "GET", url.toString(), body);
    return {};
  }

  async getAUser(request: APIRequestContext, vars: Record<string, string>): Promise<Record<string, string>> {
    const url = new URL(resolveTemplate("https://reqres.in/api/users", vars, env));
    url.searchParams.set("page", resolveTemplate("2", vars, env));
    const headers: Record<string, string> = {};
    headers["x-api-key"] = resolveTemplate("reqres_a12c5076bd1d471f9d6dadf1bf7045ca", vars, env);
    const res = await request.get(url.toString(), { headers });
    const body: unknown = await res.json().catch(() => null);
    assertStatus(res.status(), [], "GET", url.toString(), body);
    return {};
  }

  async createAUser(request: APIRequestContext, vars: Record<string, string>): Promise<Record<string, string>> {
    const url = new URL(resolveTemplate("https://reqres.in/api/register", vars, env));
    const headers: Record<string, string> = {};
    headers["x-api-key"] = resolveTemplate("reqres_a12c5076bd1d471f9d6dadf1bf7045ca", vars, env);
    headers["Content-Type"] = resolveTemplate("application/json", vars, env);
    if (headers["Content-Type"] === undefined) headers["Content-Type"] = "application/json";
    const res = await request.post(url.toString(), { headers, data: resolveTemplate("{\n    \"email\": \"eve.holt@reqres.in\",\n    \"password\": \"pistol\"\n}", vars, env) });
    const body: unknown = await res.json().catch(() => null);
    assertStatus(res.status(), [], "POST", url.toString(), body);
    return {};
  }

  async updateAUser(request: APIRequestContext, vars: Record<string, string>): Promise<Record<string, string>> {
    const url = new URL(resolveTemplate("https://reqres.in/api/users/2", vars, env));
    const headers: Record<string, string> = {};
    headers["x-api-key"] = resolveTemplate("reqres_a12c5076bd1d471f9d6dadf1bf7045ca", vars, env);
    headers["Content-Type"] = resolveTemplate("application/json", vars, env);
    if (headers["Content-Type"] === undefined) headers["Content-Type"] = "application/json";
    const res = await request.put(url.toString(), { headers, data: resolveTemplate("{\n  \"name\": \"morpheus\",\n  \"job\": \"zion resident\"\n}", vars, env) });
    const body: unknown = await res.json().catch(() => null);
    assertStatus(res.status(), [], "PUT", url.toString(), body);
    return {};
  }
}
