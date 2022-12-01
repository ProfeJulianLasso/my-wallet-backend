import { Test, TestingModule } from '@nestjs/testing';
import { CreateClientUseCase } from './create-client.use-case';

describe('CreateClientUseCase', () => {
  let useCase: CreateClientUseCase;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreateClientUseCase],
    }).compile();

    useCase = module.get<CreateClientUseCase>(CreateClientUseCase);
  });

  it('should be defined', () => {
    expect(useCase).toBeDefined();
  });
});
