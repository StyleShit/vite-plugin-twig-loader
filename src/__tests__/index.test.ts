import { describe, expect, it } from 'vitest';
import helloWorld from '..';

describe('Hello World', () => {
	it('should return "Hello world!"', () => {
		expect(helloWorld()).toBe('Hello world!');
	});
});
