import { ApiProperty } from "@nestjs/swagger";

export class RegisterUserResponseDto {
    @ApiProperty()
    access_token: string;
    @ApiProperty()
    user: {
        id: string;
    };
}