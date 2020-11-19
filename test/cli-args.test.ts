import path from "path"
import { parseArgs } from "../lib-js/cli-args"

describe.skip("getArgs", () => {
  const loadPath = path.resolve("fixtures")
  it("requires one of --dart or --command", async () => {
    expect(async () => await parseArgs(loadPath, [])).rejects.toThrow()
  })

  it.todo("populates impl, etc. based on --dart")
  it.todo("populates impl, etc. based on --dart")
  it.todo("populates the todoMode field based on --run-todo and --probe-todo")
  it.todo("accepts at most one of --run-todo and --probe-todo")
})