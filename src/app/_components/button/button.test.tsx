import {describe} from "node:test";
import {render, screen} from "@testing-library/react";
import {Button} from "@/app/_components/button/button";

describe('Button', () => {
  test('renders a default button', () => {

    // Note: render function automatically perform cleanup task
    const {getByText} = render(<Button>Click here</Button>)
    expect(getByText("Click here")).toBeInTheDocument()
  })

  test('disables the button when isDisable prop is true', () => {
    render(<Button isDisabled={true}>Click here</Button>)
    expect(screen.getByRole("button")).toBeDisabled()
  })

  test('applies the correct css class for different button variants', () => {
    // Neutral
    const {rerender} = render(<Button variant="neutral">Click here</Button>)
    expect(screen.getByRole("button")).toHaveClass("btn-neutral")

    // Primary
    rerender(<Button variant="primary">Click here</Button>)
    expect(screen.getByRole("button")).toHaveClass("btn-primary")

    // Secondary
    rerender(<Button variant="secondary">Click here</Button>)
    expect(screen.getByRole("button")).toHaveClass("btn-secondary")

    // Accent
    rerender(<Button variant="accent">Click here</Button>)
    expect(screen.getByRole("button")).toHaveClass("btn-accent")

    // Ghost
    rerender(<Button variant="ghost">Click here</Button>)
    expect(screen.getByRole("button")).toHaveClass("btn-ghost")

    // Info
    rerender(<Button variant="info">Click here</Button>)
    expect(screen.getByRole("button")).toHaveClass("btn-info")

    // Success
    rerender(<Button variant="success">Click here</Button>)
    expect(screen.getByRole("button")).toHaveClass("btn-success")

    // Warning
    rerender(<Button variant="warning">Click here</Button>)
    expect(screen.getByRole("button")).toHaveClass("btn-warning")

    // Error
    rerender(<Button variant="error">Click here</Button>)
    expect(screen.getByRole("button")).toHaveClass("btn-error")
  })

  test('applies the correct css class for different button shapes', () => {
    // Default: No need to test default case.

    // Wide
    const {rerender} = render(<Button shape="wide">Click here</Button>)
    expect(screen.getByRole("button")).toHaveClass("btn-wide")

    // square
    rerender(<Button shape="square">Click here</Button>)
    expect(screen.getByRole("button")).toHaveClass("btn-square")

    // Full
    rerender(<Button shape="full">Click here</Button>)
    expect(screen.getByRole("button")).toHaveClass("btn-full")
  })

  test('applies the correct css class for different button sizes', () => {
    // Normal: No need to test normal case

    // Tiny
    const {rerender} = render(<Button size={"tiny"}>Click here</Button>)
    expect(screen.getByRole('button')).toHaveClass("btn-xs")

    // Small
    rerender(<Button size="small">Click here</Button>)
    expect(screen.getByRole('button')).toHaveClass("btn-sm")

    // Large
    rerender(<Button size="large">Click here</Button>)
    expect(screen.getByRole('button')).toHaveClass("btn-lg")
  })

  test('show loading when isLoading prop is true', () => {
    render(<Button isLoading={true}>Click here</Button>)
    expect(screen.getByRole('button')).toHaveClass("pointer-events-none opacity-80")
  })

  test('apply outline design when isOutline prop is true', () => {
    render(<Button isOutline={true}>Click here</Button>)
    expect(screen.getByRole('button')).toHaveClass("btn-outline")
  })

  test('apply link design when isLink prop is true', () => {
    render(<Button isLink={true}>Click here</Button>)
    expect(screen.getByRole('button')).toHaveClass("btn-link")
  })

  test('apply animated animation when animatedIcon prop is true', () => {
    render(<Button animatedIcon={true}>Click here</Button>)
    expect(screen.getByRole('button')).toHaveClass("animated-icon")
  })

})