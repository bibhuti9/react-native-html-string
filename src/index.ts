import { NativeModules } from 'react-native';

/**
 * Converts the provided HTML string to its rendered output.
 *
 * @param {string} html - The HTML string to be converted, e.g., '<p>Hello react native</p>'.
 * @returns {Promise<string>} A promise that resolves with the converted HTML string.
 * @throws Will reject the promise if an error occurs during conversion.
 */
export function convertHTML(html: string): Promise<string> {
  const HtmlString = NativeModules.HtmlString;

  return new Promise((resolve, reject) => {
    try {
      HtmlString.convertHTML(html, (result: string) => resolve(result));
    } catch {
      reject('Failed to convert HTML.');
    }
  });
}
