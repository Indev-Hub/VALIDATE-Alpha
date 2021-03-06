/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      name
      companies {
        items {
          id
          title
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      name
      companies {
        items {
          id
          title
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      name
      companies {
        items {
          id
          title
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createCompany = /* GraphQL */ `
  mutation CreateCompany(
    $input: CreateCompanyInput!
    $condition: ModelCompanyConditionInput
  ) {
    createCompany(input: $input, condition: $condition) {
      id
      title
      userID
      user {
        id
        name
        companies {
          nextToken
        }
        createdAt
        updatedAt
      }
      forms {
        items {
          id
          companyID
          validations
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateCompany = /* GraphQL */ `
  mutation UpdateCompany(
    $input: UpdateCompanyInput!
    $condition: ModelCompanyConditionInput
  ) {
    updateCompany(input: $input, condition: $condition) {
      id
      title
      userID
      user {
        id
        name
        companies {
          nextToken
        }
        createdAt
        updatedAt
      }
      forms {
        items {
          id
          companyID
          validations
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteCompany = /* GraphQL */ `
  mutation DeleteCompany(
    $input: DeleteCompanyInput!
    $condition: ModelCompanyConditionInput
  ) {
    deleteCompany(input: $input, condition: $condition) {
      id
      title
      userID
      user {
        id
        name
        companies {
          nextToken
        }
        createdAt
        updatedAt
      }
      forms {
        items {
          id
          companyID
          validations
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createForm = /* GraphQL */ `
  mutation CreateForm(
    $input: CreateFormInput!
    $condition: ModelFormConditionInput
  ) {
    createForm(input: $input, condition: $condition) {
      id
      companyID
      company {
        id
        title
        userID
        user {
          id
          name
          createdAt
          updatedAt
        }
        forms {
          nextToken
        }
        createdAt
        updatedAt
      }
      validations
      createdAt
      updatedAt
    }
  }
`;
export const updateForm = /* GraphQL */ `
  mutation UpdateForm(
    $input: UpdateFormInput!
    $condition: ModelFormConditionInput
  ) {
    updateForm(input: $input, condition: $condition) {
      id
      companyID
      company {
        id
        title
        userID
        user {
          id
          name
          createdAt
          updatedAt
        }
        forms {
          nextToken
        }
        createdAt
        updatedAt
      }
      validations
      createdAt
      updatedAt
    }
  }
`;
export const deleteForm = /* GraphQL */ `
  mutation DeleteForm(
    $input: DeleteFormInput!
    $condition: ModelFormConditionInput
  ) {
    deleteForm(input: $input, condition: $condition) {
      id
      companyID
      company {
        id
        title
        userID
        user {
          id
          name
          createdAt
          updatedAt
        }
        forms {
          nextToken
        }
        createdAt
        updatedAt
      }
      validations
      createdAt
      updatedAt
    }
  }
`;
