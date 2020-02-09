import isDeepFrozen from "../../utils/isDeepFrozen"
import { CounterService } from "./types"
import configureServices from "../configureServices"

describe("Counter service", () => {
  let counter: CounterService

  beforeEach(() => {
    counter = configureServices().counter
  })

  it("should be immutable", () => {
    expect(isDeepFrozen(counter)).toBeTruthy()
  })

  it("should start at zero", () => {
    expect(counter.getValue()).toBe(0)
  })

  it("should get step", () => {
    expect(counter.getStep()).toBe(1)
  })

  it("should get max value", () => {
    expect(counter.getMax()).toBe(Number.MAX_SAFE_INTEGER)
  })

  it("should get min value", () => {
    expect(counter.getMin()).toBe(Number.MIN_SAFE_INTEGER)
  })

  it("should set count value", () => {
    expect(counter.setValue(1010)).toBe(1010)
  })

  it("should set count value within the boundaries", () => {
    const max = 100
    const min = -100
    counter.setMax(max)
    counter.setMin(min)
    counter.setValue(max * 2)
    expect(counter.getValue()).toBe(max)
    counter.setValue(min * 2)
    expect(counter.getValue()).toBe(min)
  })

  it("should set floored count", () => {
    counter.setValue(1.8)
    expect(counter.getValue()).toBe(1)
  })

  it("should set step", () => {
    counter.setStep(10)
    expect(counter.getStep()).toBe(10)
  })

  it("should set step within safe integers", () => {
    const max = Number.MAX_SAFE_INTEGER + 100
    const min = Number.MIN_SAFE_INTEGER - 100
    counter.setStep(max)
    expect(counter.getStep()).toBe(Number.MAX_SAFE_INTEGER)
    counter.setStep(min)
    expect(counter.getStep()).toBe(Number.MIN_SAFE_INTEGER)
  })

  it("should set floored step", () => {
    counter.setStep(3.8)
    expect(counter.getStep()).toBe(3)
  })

  it("should set max value", () => {
    counter.setMax(2)
    expect(counter.getMax()).toBe(2)
  })

  it("should set max value within safe integers", () => {
    const max = Number.MAX_SAFE_INTEGER + 100
    const min = Number.MIN_SAFE_INTEGER - 100
    counter.setMax(max)
    expect(counter.getMax()).toBe(Number.MAX_SAFE_INTEGER)
    counter.setMax(min)
    expect(counter.getMax()).toBe(Number.MIN_SAFE_INTEGER)
  })

  it("should set floored max value", () => {
    counter.setMax(5.8)
    expect(counter.getMax()).toBe(5)
  })

  it("should return fixed count value if out of max boundary", () => {
    counter.setValue(100)
    expect(counter.setMax(1000)).toBe(100)
    expect(counter.setMax(10)).toBe(10)
  })

  it("should set min value", () => {
    counter.setMin(-2)
    expect(counter.getMin()).toBe(-2)
  })

  it("should set min value within safe integer", () => {
    const max = Number.MAX_SAFE_INTEGER + 100
    const min = Number.MIN_SAFE_INTEGER - 100
    counter.setMax(max)
    expect(counter.getMax()).toBe(Number.MAX_SAFE_INTEGER)
    counter.setMax(min)
    expect(counter.getMax()).toBe(Number.MIN_SAFE_INTEGER)
  })

  it("should set floored min value", () => {
    counter.setMax(-5.8)
    expect(counter.getMax()).toBe(-6)
  })

  it("should return fixed count value if out of max boundary", () => {
    counter.setValue(-100)
    expect(counter.setMin(-1000)).toBe(-100)
    expect(counter.setMin(-10)).toBe(-10)
  })

  it("should reset to zero", () => {
    counter.setValue(100)
    expect(counter.reset()).toBe(0)
  })

  it("should increment by step", () => {
    counter.setStep(2)
    counter.increment()
    counter.increment()
    expect(counter.increment()).toBe(6)
  })

  it("should not increment if out of boundaries", () => {
    counter.setMax(10)
    counter.setValue(10)
    expect(counter.increment()).toBe(10)
  })

  it("should decrement by step", () => {
    counter.setStep(4)
    counter.decrement()
    counter.decrement()
    expect(counter.decrement()).toBe(-12)
  })

  it("should not decrement if out of boundaries", () => {
    counter.setMin(-10)
    counter.setValue(-10)
    expect(counter.decrement()).toBe(-10)
  })
})
