// export function formatPrice() {}
// export function formatDate() {}

export namespace price {
  export function format(price: number): string {
    return "$" + price;
  }
}
export namespace date {
  export function format(dateString: string): string {
    return "2022-02-02";
  }
}

// export { price, date };
