import repeatAsync from "../../utils/repeatAsync"
import isDeepFrozen from "../../utils/isDeepFrozen"
import { ReadonlyRecord, RecordService } from "./types"
import configureServices from "../configureServices"

describe("Record service", () => {
  const me = { name: "Jett" }

  let recordService: RecordService
  let record: ReadonlyRecord<typeof me>

  beforeEach(() => {
    recordService = configureServices().record
    record = recordService.createRecord(me)
  })

  it("should be immutable", () => {
    expect(isDeepFrozen(recordService)).toBeTruthy()
  })

  it("should have a unique id", async () => {
    const createMe = () => recordService.createRecord(me)
    const records = await repeatAsync(createMe, 100)
    const ids = records.map(r => r.id)
    const uniqueIds = Array.from(new Set(ids))
    expect(uniqueIds.length).toEqual(ids.length)
  })

  it("should create a record", () => {
    expect(record).toEqual({
      id: expect.any(String),
      name: "Jett",
    })
  })

  it("should create readonly record", () => {
    expect(record).toEqual({
      id: expect.any(String),
      name: "Jett",
    })

    expect(isDeepFrozen(record)).toBeTruthy()
  })

  it("should update record", () => {
    const updated = recordService.editRecord(record, {
      name: "Jett Husher",
    })

    expect(updated.name).toBe("Jett Husher")
  })

  it("should update record without changing the id", () => {
    const options = { id: "" }
    const updated = recordService.editRecord(record, options as {})
    expect(updated.id).toBe(record.id)
    expect(updated).toEqual(record)
  })
})
